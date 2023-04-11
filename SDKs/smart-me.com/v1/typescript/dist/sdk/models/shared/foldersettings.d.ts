import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The Type of the folder
 */
export declare enum FolderSettingsFolderTypeEnum {
    Folder = "Folder",
    Location = "Location",
    Factory = "Factory",
    House = "House",
    Office = "Office",
    Machine = "Machine",
    VirtualMeter = "VirtualMeter",
    ElecticityFolder = "ElecticityFolder",
    WaterFolder = "WaterFolder",
    HeatFolder = "HeatFolder",
    GasFolder = "GasFolder",
    TemperatureFolder = "TemperatureFolder",
    Sun = "Sun",
    Light = "Light",
    Ice = "Ice",
    Sofa = "Sofa",
    Food = "Food",
    Coffee = "Coffee",
    Car = "Car",
    ChargingStation = "ChargingStation",
    Meter = "Meter",
    User = "User",
    Trash = "Trash",
    GridPhotovoltaicPowerSystem = "GridPhotovoltaicPowerSystem"
}
/**
 * Container for the folder settings
 */
export declare class FolderSettings extends SpeakeasyBase {
    /**
     * The Description of the folder or meter
     */
    description?: string;
    /**
     * Flag if the meter is enabled (folder not supported yet)
     */
    enable?: boolean;
    /**
     * The Type of the folder
     */
    folderType?: FolderSettingsFolderTypeEnum;
    /**
     * The Name of the folder or meter
     */
    name?: string;
    /**
     * The parent folder ID of this item
     */
    parentFolderId?: string;
    /**
     * The serial number (meter only)
     */
    serialNumber?: number;
    /**
     * Flag if the meter is usable for virtual billing meters (e.g. washroom)
     */
    useableForVirtualBillingMeters?: boolean;
    /**
     * The value correction on this meter
     */
    valueCorrection?: number;
    /**
     * The value correction on all parent folders. but not on the meter itself
     */
    valueCorrectionParentFolder?: number;
    /**
     * The name of the visualization of the folder
     */
    visualizationName?: string;
}
