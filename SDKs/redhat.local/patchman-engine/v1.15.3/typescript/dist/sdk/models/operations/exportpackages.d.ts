import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ExportPackagesSecurity extends SpeakeasyBase {
    rhIdentity: string;
}
/**
 * Sort field
 */
export declare enum ExportPackagesSortEnum {
    Id = "id",
    Name = "name",
    SystemsInstalled = "systems_installed",
    SystemsUpdatable = "systems_updatable"
}
export declare class ExportPackagesRequest extends SpeakeasyBase {
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
    filterSystemsInstalled?: string;
    /**
     * Filter
     */
    filterSystemsUpdatable?: string;
    /**
     * Find matching text
     */
    search?: string;
    /**
     * Sort field
     */
    sort?: ExportPackagesSortEnum;
}
export declare class ExportPackagesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    controllersPackageItems?: shared.ControllersPackageItem[];
}
