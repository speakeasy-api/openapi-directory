import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export declare enum DriverRaceProjectionsEntryListFormatEnum {
    Xml = "xml",
    Json = "json"
}
export declare class DriverRaceProjectionsEntryListRequest extends SpeakeasyBase {
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: DriverRaceProjectionsEntryListFormatEnum;
    /**
     * Unique FantasyData Race ID.
     *
     * @remarks
     * Example:<code>1</code>, <code>2</code>, etc.
     */
    raceid: string;
}
export declare class DriverRaceProjectionsEntryListResponse extends SpeakeasyBase {
    contentType: string;
    driverRaceProjections?: shared.DriverRaceProjection[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
