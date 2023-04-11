import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteAPISpecificationSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteAPISpecificationRequest extends SpeakeasyBase {
    /**
     * ID of the API specification. The unique ID for each API can be found by navigating to your **API Definitions** page.
     */
    id: string;
}
export declare class DeleteAPISpecificationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
