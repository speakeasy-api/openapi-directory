import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a particular version of an API. ApiVersions are what consumers actually use.
**/
export declare class ApiVersion extends SpeakeasyBase {
    annotations?: Record<string, string>;
    createTime?: string;
    description?: string;
    displayName?: string;
    labels?: Record<string, string>;
    name?: string;
    state?: string;
    updateTime?: string;
}
/**
 * Describes a particular version of an API. ApiVersions are what consumers actually use.
**/
export declare class ApiVersionInput extends SpeakeasyBase {
    annotations?: Record<string, string>;
    description?: string;
    displayName?: string;
    labels?: Record<string, string>;
    name?: string;
    state?: string;
}
