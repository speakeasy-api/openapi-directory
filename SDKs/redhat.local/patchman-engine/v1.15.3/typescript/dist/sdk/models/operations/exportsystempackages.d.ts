import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ExportSystemPackagesSecurity extends SpeakeasyBase {
    rhIdentity: string;
}
export declare class ExportSystemPackagesRequest extends SpeakeasyBase {
    /**
     * Filter
     */
    filterDescription?: string;
    /**
     * Filter
     */
    filterEvra?: string;
    /**
     * Filter
     */
    filterName?: string;
    /**
     * Filter
     */
    filterSummary?: string;
    /**
     * Filter
     */
    filterUpdatable?: boolean;
    /**
     * Inventory ID
     */
    inventoryId: string;
    /**
     * Find matching text
     */
    search?: string;
}
export declare class ExportSystemPackagesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    controllersSystemPackageInlines?: shared.ControllersSystemPackageInline[];
}
