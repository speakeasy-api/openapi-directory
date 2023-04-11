import { SpeakeasyBase } from "../../../internal/utils";
import { ComvectaraStatus } from "./comvectarastatus";
import { ServingResponse } from "./servingresponse";
import { ServingResponseSetDocument } from "./servingresponsesetdocument";
export declare class ServingResponseSet extends SpeakeasyBase {
    document?: ServingResponseSetDocument[];
    response?: ServingResponse[];
    /**
     * Potentially multiple warnings.
     */
    status?: ComvectaraStatus[];
}
