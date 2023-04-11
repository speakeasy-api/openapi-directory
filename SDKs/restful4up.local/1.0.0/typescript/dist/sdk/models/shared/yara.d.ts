import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Yara rule meta data section
 */
export declare class YaraMeta extends SpeakeasyBase {
    /**
     * Date of the YARA rule created
     */
    date: string;
    /**
     * MD5 check sum
     */
    md5sum: string;
    /**
     * SHA 256 check sum
     */
    sha256sum: string;
    /**
     * SHA 512 check sum
     */
    sha512sum: string;
}
export declare class Yara extends SpeakeasyBase {
    /**
     * Yara rule meta data section
     */
    meta: YaraMeta;
    /**
     * Yara rule name
     */
    name: string;
    /**
     * Yara rule string section
     */
    strings: string[][];
}
