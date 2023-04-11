import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class LineGetRequest extends SpeakeasyBase {
    /**
     * A comma-separated list of line ids e.g. victoria,circle,N133. Max. approx. 20 ids.
     */
    ids: string[];
}
export declare class LineGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    tflApiPresentationEntitiesLines?: shared.TflApiPresentationEntitiesLine[];
}
