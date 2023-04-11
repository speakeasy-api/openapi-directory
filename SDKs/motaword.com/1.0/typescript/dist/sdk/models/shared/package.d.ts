import { SpeakeasyBase } from "../../../internal/utils";
import { PackageStatusEnumEnum } from "./packagestatusenumenum";
/**
 * Packaging status and tracking code. With the package key, you can track the progress of translation packaging.Also packaged translation streamed.
 */
export declare class Package extends SpeakeasyBase {
    /**
     * This is the unique package tracking key. You can use this key to track the current progress of the translation packaging with /package/check call.
     */
    key?: string;
    /**
     * The status of translation packaging. Possible values are 'started', 'packaging', 'completed'. When completed, you can make a /download call to download the last translation package.
     */
    status?: PackageStatusEnumEnum;
}
