import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetSpotSetByIdRequest extends SpeakeasyBase {
    /**
     * Unique identifier
     */
    id: string;
    /**
     * Unique spot set identifier
     */
    setId: string;
}
export declare class GetSpotSetByIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A JSON object containing the spotset
     */
    spotSet?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
