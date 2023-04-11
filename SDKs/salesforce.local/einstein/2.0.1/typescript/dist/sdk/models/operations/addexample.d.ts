import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AddExampleSecurity extends SpeakeasyBase {
    bearerToken: string;
}
export declare class AddExampleRequestBody extends SpeakeasyBase {
    /**
     * Location of the local image file to upload.
     */
    data?: string;
    /**
     * ID of the label to add to the example.
     */
    labelId?: number;
    /**
     * Name of the example. Maximum length is 180 characters.
     */
    name?: string;
}
export declare class AddExampleRequest extends SpeakeasyBase {
    requestBody?: AddExampleRequestBody;
    /**
     * Dataset Id
     */
    datasetId: string;
}
export declare class AddExampleResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Example created
     */
    example?: shared.Example;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
