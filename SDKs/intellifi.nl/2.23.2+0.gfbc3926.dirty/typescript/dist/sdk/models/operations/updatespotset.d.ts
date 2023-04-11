import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateSpotSetRequest extends SpeakeasyBase {
    /**
     * A JSON object containing spotset information
     */
    spotSetUpdate: shared.SpotSetUpdate;
    /**
     * Unique identifier
     */
    id: string;
    /**
     * Unique spot set identifier
     */
    setId: string;
}
export declare class UpdateSpotSetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A JSON object containing the modified resource
     */
    responseDefaultResource?: shared.ResponseDefaultResource;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
