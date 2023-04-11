import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ServicesForALineSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ServicesForALineRequest extends SpeakeasyBase {
    /**
     * The environment where to find services
     */
    line: string;
}
export declare class ServicesForALineResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful operation
     */
    services?: shared.Service[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
