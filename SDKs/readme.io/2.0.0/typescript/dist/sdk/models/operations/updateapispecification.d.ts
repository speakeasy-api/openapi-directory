import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateAPISpecificationSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateAPISpecificationRequestBodySpec extends SpeakeasyBase {
    content: Uint8Array;
    spec: string;
}
export declare class UpdateAPISpecificationRequestBody extends SpeakeasyBase {
    /**
     * OpenAPI/Swagger file
     */
    spec?: UpdateAPISpecificationRequestBodySpec;
}
export declare class UpdateAPISpecificationRequest extends SpeakeasyBase {
    requestBody: UpdateAPISpecificationRequestBody;
    /**
     * ID of the API specification. The unique ID for each API can be found by navigating to your **API Definitions** page.
     */
    id: string;
}
export declare class UpdateAPISpecificationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
