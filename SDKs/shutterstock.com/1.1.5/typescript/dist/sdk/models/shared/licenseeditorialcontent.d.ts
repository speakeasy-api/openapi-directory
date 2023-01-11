import { SpeakeasyBase } from "../../../internal/utils";
export declare enum LicenseEditorialContentSizeEnum {
    Small = "small",
    Medium = "medium",
    Original = "original"
}
/**
 * Individual editorial content to license
**/
export declare class LicenseEditorialContent extends SpeakeasyBase {
    editorialId: string;
    license: string;
    metadata?: Record<string, any>;
    size?: LicenseEditorialContentSizeEnum;
}
