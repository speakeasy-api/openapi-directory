import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Additional Links
 */
export declare class Reference extends SpeakeasyBase {
    /**
     * Source of the reference e.g. NVD
     */
    source?: string;
    /**
     * Uri for the mentioned source e.g. https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-34527.
     */
    uri?: string;
}
