import { SpeakeasyBase } from "../../../internal/utils";
export declare class RateLimitErrors extends SpeakeasyBase {
    title?: string;
}
export declare class RateLimit extends SpeakeasyBase {
    errors?: RateLimitErrors[];
}
