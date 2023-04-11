import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutSpotsetsIdRequest extends SpeakeasyBase {
    /**
     * A JSON object containing spotset information
     */
    spotSetUpdate: shared.SpotSetUpdate;
    /**
     * Unique identifier
     */
    id: string;
}
export declare class PutSpotsetsIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A JSON object containing the modified resource
     */
    responseDefaultResource?: shared.ResponseDefaultResource;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
