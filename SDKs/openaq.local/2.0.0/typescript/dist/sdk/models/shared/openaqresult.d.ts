import { SpeakeasyBase } from "../../../internal/utils";
export declare class OpenAqResultMeta extends SpeakeasyBase {
    found?: number;
    license?: string;
    limit?: number;
    name?: string;
    page?: number;
    website?: string;
}
export declare class OpenAqResult extends SpeakeasyBase {
    meta?: OpenAqResultMeta;
    results?: any[];
}
