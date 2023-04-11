import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Container Class for the Web API. Conatinas the MeterValues in the Past
 */
export declare class DeviceInPast extends SpeakeasyBase {
    /**
     * The Meter Counter Reading (Total Energy used)
     */
    counterReading?: number;
    /**
     * The Meter Counter Reading Export
     */
    counterReadingExport?: number;
    /**
     * The Meter Counter Reading Export Tariff 1
     */
    counterReadingExportT1?: number;
    /**
     * The Meter Counter Reading Export Tariff 2
     */
    counterReadingExportT2?: number;
    /**
     * The Meter Counter Reading Export Tariff 3
     */
    counterReadingExportT3?: number;
    /**
     * The Meter Counter Reading Export Tariff 4
     */
    counterReadingExportT4?: number;
    /**
     * The Meter Counter Reading Import
     */
    counterReadingImport?: number;
    /**
     * The Meter Counter Reading Import Tariff 1
     */
    counterReadingImportT1?: number;
    /**
     * The Meter Counter Reading Import Tariff 2
     */
    counterReadingImportT2?: number;
    /**
     * The Meter Counter Reading Import Tariff 3
     */
    counterReadingImportT3?: number;
    /**
     * The Meter Counter Reading Import Tariff 4
     */
    counterReadingImportT4?: number;
    /**
     * The Meter Counter Reading Tariff 1
     */
    counterReadingT1?: number;
    /**
     * The Meter Counter Reading Tariff 2
     */
    counterReadingT2?: number;
    /**
     * The Meter Counter Reading Tariff 3
     */
    counterReadingT3?: number;
    /**
     * The Meter Counter Reading Tariff 4
     */
    counterReadingT4?: number;
    /**
     * The Unit of the Counter Reading
     */
    counterReadingUnit?: string;
    /**
     * The Date of the Values
     */
    date?: Date;
    /**
     * The ID of the device
     */
    id?: string;
    /**
     * The Serial number
     */
    serial?: number;
}
