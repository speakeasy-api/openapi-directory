import { SpeakeasyBase } from "../../../internal/utils";
import { Cvssv3 } from "./cvssv3";
import { Reference } from "./reference";
/**
 * CVE stands for Common Vulnerabilities and Exposures. More information: https://cve.mitre.org
 */
export declare class Cve extends SpeakeasyBase {
    /**
     * Common Vulnerability Scoring System version 3.
     */
    cvssv3?: Cvssv3;
    /**
     * The unique identifier for the vulnerability. e.g. CVE-2021-34527
     */
    id?: string;
    /**
     * Additional information about the CVE. e.g. https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-34527
     */
    references?: Reference[];
    /**
     * Whether upstream fix is available for the CVE.
     */
    upstreamFixAvailable?: boolean;
}
