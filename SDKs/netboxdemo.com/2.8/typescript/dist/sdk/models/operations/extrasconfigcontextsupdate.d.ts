import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ExtrasConfigContextsUpdateRequest extends SpeakeasyBase {
    writableConfigContextInput: shared.WritableConfigContextInput;
    /**
     * A unique integer value identifying this config context.
     */
    id: number;
}
export declare class ExtrasConfigContextsUpdateResponse extends SpeakeasyBase {
    configContext?: shared.ConfigContext;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
