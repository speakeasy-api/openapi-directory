import { SpeakeasyBase } from "../../../internal/utils";
import { AutoExportSettings } from "./autoexportsettings";
/**
 * The folder type of the item
 */
export declare enum FolderMenuItemFolderTypeEnum {
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
 * A folder menu item
 */
export declare class FolderMenuItem extends SpeakeasyBase {
    /**
     * Settings for the auto export functionality of a meter
     */
    autoExportSettings?: AutoExportSettings;
    /**
     * Children folder menu items (sub folder menu items)
     */
    children?: FolderMenuItem[];
    /**
     * The Description of the folder
     */
    description?: string;
    /**
     * The folder type of the item
     */
    folderType?: FolderMenuItemFolderTypeEnum;
    /**
     * The path to the Icon of this folder
     */
    icon?: string;
    /**
     * The id of the folder menu item
     */
    id?: string;
    /**
     * The serial number if the folder menu item is a meter.
     *
     * @remarks
     *             Serial number is handled as a string, as javascript on client side cannot handle long integers properly.
     */
    meterSerialNumber?: string;
    /**
     * The Name of the item
     */
    name?: string;
    /**
     * The ID of the user of this folder (only for foldertype user)
     */
    userId?: string;
}
