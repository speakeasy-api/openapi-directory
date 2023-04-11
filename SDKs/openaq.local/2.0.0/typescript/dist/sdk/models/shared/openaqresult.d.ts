import { SpeakeasyBase } from "../../../internal/utils";
export declare class OpenAQResultMeta extends SpeakeasyBase {
    found?: number;
    license?: string;
    limit?: number;
    name?: string;
    page?: number;
    website?: string;
}
/**
 * Successful Response
 */
export declare class OpenAQResult extends SpeakeasyBase {
    meta?: OpenAQResultMeta;
    results?: any[];
}
