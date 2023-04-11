import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UploadAPISpecificationSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UploadAPISpecificationRequestBodySpec extends SpeakeasyBase {
    content: Uint8Array;
    spec: string;
}
export declare class UploadAPISpecificationRequestBody extends SpeakeasyBase {
    /**
     * OpenAPI/Swagger file
     */
    spec?: UploadAPISpecificationRequestBodySpec;
}
export declare class UploadAPISpecificationRequest extends SpeakeasyBase {
    requestBody: UploadAPISpecificationRequestBody;
    /**
     * Version number of your docs project, for example, v3.0. To see all valid versions for your docs project call https://docs.readme.com/developers/reference/version#getversions.
     */
    xReadmeVersion: string;
}
export declare class UploadAPISpecificationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
