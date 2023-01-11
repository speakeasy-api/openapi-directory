import dataclasses
from enum import Enum

class OrderSourceNameEnum(str, Enum):
    AMAZON_CA = "amazon_ca"
    AMAZON_US = "amazon_us"
    BRIGHTPEARL = "brightpearl"
    CHANNEL_ADVISOR = "channel_advisor"
    CRATEJOY = "cratejoy"
    EBAY = "ebay"
    ETSY = "etsy"
    JANE = "jane"
    GROUPON_GOODS = "groupon_goods"
    MAGENTO = "magento"
    PAYPAL = "paypal"
    SELLER_ACTIVE = "seller_active"
    SHOPIFY = "shopify"
    STITCH_LABS = "stitch_labs"
    SQUARESPACE = "squarespace"
    THREE_DCART = "three_dcart"
    TOPHATTER = "tophatter"
    WALMART = "walmart"
    WOO_COMMERCE = "woo_commerce"
    VOLUSION = "volusion"

