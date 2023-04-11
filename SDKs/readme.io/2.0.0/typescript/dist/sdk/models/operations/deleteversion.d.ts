import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteVersionSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteVersionRequest extends SpeakeasyBase {
    /**
     * Semver version indentifier
     */
    versionId: string;
}
export declare class DeleteVersionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
