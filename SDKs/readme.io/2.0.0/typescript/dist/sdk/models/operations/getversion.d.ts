import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetVersionSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class GetVersionRequest extends SpeakeasyBase {
    /**
     * Semver version indentifier
     */
    versionId: string;
}
export declare class GetVersionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
