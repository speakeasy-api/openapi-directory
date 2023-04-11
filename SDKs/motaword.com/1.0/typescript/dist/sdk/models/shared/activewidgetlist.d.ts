import { SpeakeasyBase } from "../../../internal/utils";
import { ActiveWidget } from "./activewidget";
import { PagingMeta } from "./pagingmeta";
/**
 * List of widgets
 */
export declare class ActiveWidgetList extends SpeakeasyBase {
    meta?: PagingMeta;
    widgets?: ActiveWidget[];
}
