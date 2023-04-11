import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The algorithm used to compute the hash value.
 */
export declare enum HashTypeEnum {
    HashTypeUnspecified = "HASH_TYPE_UNSPECIFIED",
    Sha256 = "SHA256",
    Md5 = "MD5"
}
/**
 * A hash of file content.
 */
export declare class Hash extends SpeakeasyBase {
    /**
     * The algorithm used to compute the hash value.
     */
    type?: HashTypeEnum;
    /**
     * The hash value.
     */
    value?: string;
}
