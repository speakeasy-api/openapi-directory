import { SpeakeasyBase } from "../../../internal/utils";
import { VersionedPackage } from "./versionedpackage";
import { WindowsApplication } from "./windowsapplication";
import { WindowsQuickFixEngineeringPackage } from "./windowsquickfixengineeringpackage";
import { WindowsUpdatePackage } from "./windowsupdatepackage";
import { ZypperPatch } from "./zypperpatch";
/**
 * Software package information of the operating system.
 */
export declare class SoftwarePackage extends SpeakeasyBase {
    /**
     * Information related to the a standard versioned package. This includes package info for APT, Yum, Zypper, and Googet package managers.
     */
    aptPackage?: VersionedPackage;
    /**
     * Information related to the a standard versioned package. This includes package info for APT, Yum, Zypper, and Googet package managers.
     */
    cosPackage?: VersionedPackage;
    /**
     * Information related to the a standard versioned package. This includes package info for APT, Yum, Zypper, and Googet package managers.
     */
    googetPackage?: VersionedPackage;
    /**
     * Information related to a Quick Fix Engineering package. Fields are taken from Windows QuickFixEngineering Interface and match the source names: https://docs.microsoft.com/en-us/windows/win32/cimwin32prov/win32-quickfixengineering
     */
    qfePackage?: WindowsQuickFixEngineeringPackage;
    /**
     * Contains information about a Windows application that is retrieved from the Windows Registry. For more information about these fields, see: https://docs.microsoft.com/en-us/windows/win32/msi/uninstall-registry-key
     */
    windowsApplication?: WindowsApplication;
    /**
     * Details related to a Windows Update package. Field data and names are taken from Windows Update API IUpdate Interface: https://docs.microsoft.com/en-us/windows/win32/api/_wua/ Descriptive fields like title, and description are localized based on the locale of the VM being updated.
     */
    wuaPackage?: WindowsUpdatePackage;
    /**
     * Information related to the a standard versioned package. This includes package info for APT, Yum, Zypper, and Googet package managers.
     */
    yumPackage?: VersionedPackage;
    /**
     * Information related to the a standard versioned package. This includes package info for APT, Yum, Zypper, and Googet package managers.
     */
    zypperPackage?: VersionedPackage;
    /**
     * Details related to a Zypper Patch.
     */
    zypperPatch?: ZypperPatch;
}
