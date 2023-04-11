import { SpeakeasyBase } from "../../../internal/utils";
/**
 * [Deprecated] This message specifies a header location to extract JWT token. This message specifies a header location to extract JWT token.
 */
export declare class JwtHeader extends SpeakeasyBase {
    /**
     * The HTTP header name.
     */
    name?: string;
    /**
     * The value prefix. The value format is "value_prefix" For example, for "Authorization: Bearer ", value_prefix="Bearer " with a space at the end.
     */
    valuePrefix?: string;
}
