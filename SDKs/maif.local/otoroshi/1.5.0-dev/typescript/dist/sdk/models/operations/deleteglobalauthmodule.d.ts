import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteGlobalAuthModuleSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteGlobalAuthModuleRequest extends SpeakeasyBase {
    /**
     * The auth. config id id
     */
    id: string;
}
export declare class DeleteGlobalAuthModuleResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful operation
     */
    deleted?: shared.Deleted;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
