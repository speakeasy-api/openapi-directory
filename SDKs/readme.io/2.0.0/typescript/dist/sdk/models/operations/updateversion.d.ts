import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateVersionSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateVersionRequest extends SpeakeasyBase {
    /**
     * Version object
     */
    version: shared.Version;
    /**
     * Semver version indentifier
     */
    versionId: string;
}
export declare class UpdateVersionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
