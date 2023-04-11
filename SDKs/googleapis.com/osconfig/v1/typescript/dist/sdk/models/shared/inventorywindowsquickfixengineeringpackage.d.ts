import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information related to a Quick Fix Engineering package. Fields are taken from Windows QuickFixEngineering Interface and match the source names: https://docs.microsoft.com/en-us/windows/win32/cimwin32prov/win32-quickfixengineering
 */
export declare class InventoryWindowsQuickFixEngineeringPackage extends SpeakeasyBase {
    /**
     * A short textual description of the QFE update.
     */
    caption?: string;
    /**
     * A textual description of the QFE update.
     */
    description?: string;
    /**
     * Unique identifier associated with a particular QFE update.
     */
    hotFixId?: string;
    /**
     * Date that the QFE update was installed. Mapped from installed_on field.
     */
    installTime?: string;
}
