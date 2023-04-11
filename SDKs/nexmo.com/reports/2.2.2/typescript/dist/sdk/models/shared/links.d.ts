import { SpeakeasyBase } from "../../../internal/utils";
export declare class LinksDownloadReport extends SpeakeasyBase {
    /**
     * URL pointing to the generated report.
     */
    href?: string;
}
export declare class LinksSelf extends SpeakeasyBase {
    /**
     * URI of this document.
     */
    href?: string;
}
export declare class Links extends SpeakeasyBase {
    downloadReport?: LinksDownloadReport;
    self?: LinksSelf;
}
