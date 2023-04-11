import { SpeakeasyBase } from "../../../internal/utils";
import { AssetPerformanceData } from "./assetperformancedata";
import { InsightList } from "./insightlist";
import { VirtualMachineDetails } from "./virtualmachinedetails";
/**
 * An asset represents a resource in your environment. Asset types include virtual machines and databases.
 */
export declare class Asset extends SpeakeasyBase {
    /**
     * Output only. The list of groups that the asset is assigned to.
     */
    assignedGroups?: string[];
    /**
     * Generic asset attributes.
     */
    attributes?: Record<string, string>;
    /**
     * Output only. The timestamp when the asset was created.
     */
    createTime?: string;
    /**
     * Message containing insights list.
     */
    insightList?: InsightList;
    /**
     * Labels as key value pairs.
     */
    labels?: Record<string, string>;
    /**
     * Output only. The full name of the asset.
     */
    name?: string;
    /**
     * Performance data for an asset.
     */
    performanceData?: AssetPerformanceData;
    /**
     * Output only. The list of sources contributing to the asset.
     */
    sources?: string[];
    /**
     * Output only. The timestamp when the asset was last updated.
     */
    updateTime?: string;
    /**
     * Details of a VirtualMachine.
     */
    virtualMachineDetails?: VirtualMachineDetails;
}
/**
 * An asset represents a resource in your environment. Asset types include virtual machines and databases.
 */
export declare class AssetInput extends SpeakeasyBase {
    /**
     * Generic asset attributes.
     */
    attributes?: Record<string, string>;
    /**
     * Labels as key value pairs.
     */
    labels?: Record<string, string>;
    /**
     * Performance data for an asset.
     */
    performanceData?: AssetPerformanceData;
    /**
     * Details of a VirtualMachine.
     */
    virtualMachineDetails?: VirtualMachineDetails;
}
