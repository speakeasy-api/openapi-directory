import { SpeakeasyBase } from "../../../internal/utils";
import { NullableLicenseSimple } from "./nullablelicensesimple";
export declare class LicenseContentLinks extends SpeakeasyBase {
    git: string;
    html: string;
    self: string;
}
/**
 * License Content
 */
export declare class LicenseContent extends SpeakeasyBase {
    links: LicenseContentLinks;
    content: string;
    downloadUrl: string;
    encoding: string;
    gitUrl: string;
    htmlUrl: string;
    /**
     * License Simple
     */
    license: NullableLicenseSimple;
    name: string;
    path: string;
    sha: string;
    size: number;
    type: string;
    url: string;
}
