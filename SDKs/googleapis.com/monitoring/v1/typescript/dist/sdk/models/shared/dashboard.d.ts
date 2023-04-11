import { SpeakeasyBase } from "../../../internal/utils";
import { ColumnLayout } from "./columnlayout";
import { DashboardFilter } from "./dashboardfilter";
import { GridLayout } from "./gridlayout";
import { MosaicLayout } from "./mosaiclayout";
import { RowLayout } from "./rowlayout";
/**
 * A Google Stackdriver dashboard. Dashboards define the content and layout of pages in the Stackdriver web application.
 */
export declare class Dashboard extends SpeakeasyBase {
    /**
     * A simplified layout that divides the available space into vertical columns and arranges a set of widgets vertically in each column.
     */
    columnLayout?: ColumnLayout;
    /**
     * Filters to reduce the amount of data charted based on the filter criteria.
     */
    dashboardFilters?: DashboardFilter[];
    /**
     * Required. The mutable, human-readable name.
     */
    displayName?: string;
    /**
     * etag is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. An etag is returned in the response to GetDashboard, and users are expected to put that etag in the request to UpdateDashboard to ensure that their change will be applied to the same version of the Dashboard configuration. The field should not be passed during dashboard creation.
     */
    etag?: string;
    /**
     * A basic layout divides the available space into vertical columns of equal width and arranges a list of widgets using a row-first strategy.
     */
    gridLayout?: GridLayout;
    /**
     * Labels applied to the dashboard
     */
    labels?: Record<string, string>;
    /**
     * A mosaic layout divides the available space into a grid of blocks, and overlays the grid with tiles. Unlike GridLayout, tiles may span multiple grid blocks and can be placed at arbitrary locations in the grid.
     */
    mosaicLayout?: MosaicLayout;
    /**
     * Immutable. The resource name of the dashboard.
     */
    name?: string;
    /**
     * A simplified layout that divides the available space into rows and arranges a set of widgets horizontally in each row.
     */
    rowLayout?: RowLayout;
}
