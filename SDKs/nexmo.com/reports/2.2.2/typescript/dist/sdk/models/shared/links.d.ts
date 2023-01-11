import { SpeakeasyBase } from "../../../internal/utils";
export declare class LinksDownloadReport extends SpeakeasyBase {
    href?: string;
}
export declare class LinksSelf extends SpeakeasyBase {
    href?: string;
}
export declare class Links extends SpeakeasyBase {
    downloadReport?: LinksDownloadReport;
    self?: LinksSelf;
}
