import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class FindGlobalAuthModuleByIdSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FindGlobalAuthModuleByIdRequest extends SpeakeasyBase {
    /**
     * The auth. config id
     */
    id: string;
}
export declare class FindGlobalAuthModuleByIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    findGlobalAuthModuleById200ApplicationJSONOneOf?: any;
}
