<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreateRequest(
    dollar_xgafv="2",
    google_cloud_channel_v1_channel_partner_repricing_config_input=shared.GoogleCloudChannelV1ChannelPartnerRepricingConfigInput(
        repricing_config=shared.GoogleCloudChannelV1RepricingConfig(
            adjustment=shared.GoogleCloudChannelV1RepricingAdjustment(
                percentage_adjustment=shared.GoogleCloudChannelV1PercentageAdjustment(
                    percentage=shared.GoogleTypeDecimal(
                        value="provident",
                    ),
                ),
            ),
            channel_partner_granularity={
                "quibusdam": "unde",
                "nulla": "corrupti",
                "illum": "vel",
            },
            conditional_overrides=[
                shared.GoogleCloudChannelV1ConditionalOverride(
                    adjustment=shared.GoogleCloudChannelV1RepricingAdjustment(
                        percentage_adjustment=shared.GoogleCloudChannelV1PercentageAdjustment(
                            percentage=shared.GoogleTypeDecimal(
                                value="deserunt",
                            ),
                        ),
                    ),
                    rebilling_basis="COST_AT_LIST",
                    repricing_condition=shared.GoogleCloudChannelV1RepricingCondition(
                        sku_group_condition=shared.GoogleCloudChannelV1SkuGroupCondition(
                            sku_group="iure",
                        ),
                    ),
                ),
                shared.GoogleCloudChannelV1ConditionalOverride(
                    adjustment=shared.GoogleCloudChannelV1RepricingAdjustment(
                        percentage_adjustment=shared.GoogleCloudChannelV1PercentageAdjustment(
                            percentage=shared.GoogleTypeDecimal(
                                value="magnam",
                            ),
                        ),
                    ),
                    rebilling_basis="DIRECT_CUSTOMER_COST",
                    repricing_condition=shared.GoogleCloudChannelV1RepricingCondition(
                        sku_group_condition=shared.GoogleCloudChannelV1SkuGroupCondition(
                            sku_group="ipsa",
                        ),
                    ),
                ),
                shared.GoogleCloudChannelV1ConditionalOverride(
                    adjustment=shared.GoogleCloudChannelV1RepricingAdjustment(
                        percentage_adjustment=shared.GoogleCloudChannelV1PercentageAdjustment(
                            percentage=shared.GoogleTypeDecimal(
                                value="delectus",
                            ),
                        ),
                    ),
                    rebilling_basis="REBILLING_BASIS_UNSPECIFIED",
                    repricing_condition=shared.GoogleCloudChannelV1RepricingCondition(
                        sku_group_condition=shared.GoogleCloudChannelV1SkuGroupCondition(
                            sku_group="suscipit",
                        ),
                    ),
                ),
            ],
            effective_invoice_month=shared.GoogleTypeDate(
                day=477665,
                month=791725,
                year=812169,
            ),
            entitlement_granularity=shared.GoogleCloudChannelV1RepricingConfigEntitlementGranularity(
                entitlement="voluptatum",
            ),
            rebilling_basis="COST_AT_LIST",
        ),
    ),
    access_token="excepturi",
    alt="media",
    callback="recusandae",
    fields_="temporibus",
    key="ab",
    oauth_token="quis",
    parent="veritatis",
    pretty_print=False,
    quota_user="deserunt",
    upload_type="perferendis",
    upload_protocol="ipsam",
)
    
res = s.accounts.cloudchannel_accounts_channel_partner_links_channel_partner_repricing_configs_create(req, operations.CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreateSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.google_cloud_channel_v1_channel_partner_repricing_config is not None:
    # handle response
```
<!-- End SDK Example Usage -->