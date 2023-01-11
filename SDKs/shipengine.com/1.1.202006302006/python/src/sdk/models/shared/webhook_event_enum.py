import dataclasses
from enum import Enum

class WebhookEventEnum(str, Enum):
    BATCH = "batch"
    CARRIER_CONNECTED = "carrier_connected"
    ORDER_SOURCE_REFRESH_COMPLETE = "order_source_refresh_complete"
    RATE = "rate"
    REPORT_COMPLETE = "report_complete"
    SALES_ORDERS_IMPORTED = "sales_orders_imported"
    TRACK = "track"

