import { SpeakeasyBase } from "../../../internal/utils";
import { PackageStatusEnumEnum } from "./packagestatusenumenum";
/**
 * Current status of packaging process.
 */
export declare class PackageStatus extends SpeakeasyBase {
    /**
     * The status of translation packaging. Possible values are 'started', 'packaging', 'completed'. When completed, you can make a /download call to download the last translation package.
     */
    status?: PackageStatusEnumEnum;
}
