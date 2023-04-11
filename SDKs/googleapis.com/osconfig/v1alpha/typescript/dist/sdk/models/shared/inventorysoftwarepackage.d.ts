import { SpeakeasyBase } from "../../../internal/utils";
import { InventoryVersionedPackage } from "./inventoryversionedpackage";
import { InventoryWindowsApplication } from "./inventorywindowsapplication";
import { InventoryWindowsQuickFixEngineeringPackage } from "./inventorywindowsquickfixengineeringpackage";
import { InventoryWindowsUpdatePackage } from "./inventorywindowsupdatepackage";
import { InventoryZypperPatch } from "./inventoryzypperpatch";
/**
 * Software package information of the operating system.
 */
export declare class InventorySoftwarePackage extends SpeakeasyBase {
    /**
     * Information related to the a standard versioned package. This includes package info for APT, Yum, Zypper, and Googet package managers.
     */
    aptPackage?: InventoryVersionedPackage;
    /**
     * Information related to the a standard versioned package. This includes package info for APT, Yum, Zypper, and Googet package managers.
     */
    cosPackage?: InventoryVersionedPackage;
    /**
     * Information related to the a standard versioned package. This includes package info for APT, Yum, Zypper, and Googet package managers.
     */
    googetPackage?: InventoryVersionedPackage;
    /**
     * Information related to a Quick Fix Engineering package. Fields are taken from Windows QuickFixEngineering Interface and match the source names: https://docs.microsoft.com/en-us/windows/win32/cimwin32prov/win32-quickfixengineering
     */
    qfePackage?: InventoryWindowsQuickFixEngineeringPackage;
    /**
     * Contains information about a Windows application that is retrieved from the Windows Registry. For more information about these fields, see: https://docs.microsoft.com/en-us/windows/win32/msi/uninstall-registry-key
     */
    windowsApplication?: InventoryWindowsApplication;
    /**
     * Details related to a Windows Update package. Field data and names are taken from Windows Update API IUpdate Interface: https://docs.microsoft.com/en-us/windows/win32/api/_wua/ Descriptive fields like title, and description are localized based on the locale of the VM being updated.
     */
    wuaPackage?: InventoryWindowsUpdatePackage;
    /**
     * Information related to the a standard versioned package. This includes package info for APT, Yum, Zypper, and Googet package managers.
     */
    yumPackage?: InventoryVersionedPackage;
    /**
     * Information related to the a standard versioned package. This includes package info for APT, Yum, Zypper, and Googet package managers.
     */
    zypperPackage?: InventoryVersionedPackage;
    /**
     * Details related to a Zypper Patch.
     */
    zypperPatch?: InventoryZypperPatch;
}
