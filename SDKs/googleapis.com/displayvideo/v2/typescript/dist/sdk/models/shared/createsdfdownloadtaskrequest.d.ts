import { SpeakeasyBase } from "../../../internal/utils";
import { IdFilter } from "./idfilter";
import { InventorySourceFilter } from "./inventorysourcefilter";
import { ParentEntityFilter } from "./parententityfilter";
/**
 * Required. The SDF version of the downloaded file. If set to `SDF_VERSION_UNSPECIFIED`, this will default to the version specified by the advertiser or partner identified by `root_id`. An advertiser inherits its SDF version from its partner unless configured otherwise.
 */
export declare enum CreateSdfDownloadTaskRequestVersionEnum {
    SdfVersionUnspecified = "SDF_VERSION_UNSPECIFIED",
    SdfVersion31 = "SDF_VERSION_3_1",
    SdfVersion4 = "SDF_VERSION_4",
    SdfVersion41 = "SDF_VERSION_4_1",
    SdfVersion42 = "SDF_VERSION_4_2",
    SdfVersion5 = "SDF_VERSION_5",
    SdfVersion51 = "SDF_VERSION_5_1",
    SdfVersion52 = "SDF_VERSION_5_2",
    SdfVersion53 = "SDF_VERSION_5_3",
    SdfVersion54 = "SDF_VERSION_5_4",
    SdfVersion55 = "SDF_VERSION_5_5"
}
/**
 * Request message for [SdfDownloadTaskService.CreateSdfDownloadTask].
 */
export declare class CreateSdfDownloadTaskRequest extends SpeakeasyBase {
    /**
     * The ID of the advertiser to download SDF for.
     */
    advertiserId?: string;
    /**
     * A filtering option that filters entities by their entity IDs.
     */
    idFilter?: IdFilter;
    /**
     * A filtering option for filtering on Inventory Source entities.
     */
    inventorySourceFilter?: InventorySourceFilter;
    /**
     * A filtering option that filters on selected file types belonging to a chosen set of filter entities.
     */
    parentEntityFilter?: ParentEntityFilter;
    /**
     * The ID of the partner to download SDF for.
     */
    partnerId?: string;
    /**
     * Required. The SDF version of the downloaded file. If set to `SDF_VERSION_UNSPECIFIED`, this will default to the version specified by the advertiser or partner identified by `root_id`. An advertiser inherits its SDF version from its partner unless configured otherwise.
     */
    version?: CreateSdfDownloadTaskRequestVersionEnum;
}
