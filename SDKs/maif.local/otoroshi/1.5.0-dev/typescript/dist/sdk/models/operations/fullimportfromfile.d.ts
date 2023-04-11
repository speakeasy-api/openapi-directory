import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FullImportFromFileSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FullImportFromFileResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful operation
     */
    done?: shared.Done;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
