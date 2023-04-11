import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ChangelogTypeEnum {
    Unknown = "",
    Added = "added",
    Fixed = "fixed",
    Improved = "improved",
    Deprecated = "deprecated",
    Removed = "removed"
}
/**
 * Changelog object
 */
export declare class Changelog extends SpeakeasyBase {
    /**
     * Body content of the changelog
     */
    body: string;
    /**
     * Visibility of the changelog
     */
    hidden?: boolean;
    /**
     * Title of the changelog
     */
    title: string;
    type?: ChangelogTypeEnum;
}
