<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreateRequest(
    security=operations.CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreateSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreatePathParams(
        parent="a",
    ),
    query_params=operations.CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreateQueryParams(
        dollar_xgafv="1",
        access_token="aut",
        alt="media",
        callback="nihil",
        fields="qui",
        key="molestiae",
        oauth_token="provident",
        pretty_print=False,
        quota_user="assumenda",
        upload_type="dicta",
        upload_protocol="ratione",
    ),
    request=shared.GoogleCloudChannelV1ChannelPartnerRepricingConfigInput(
        repricing_config=shared.GoogleCloudChannelV1RepricingConfig(
            adjustment=shared.GoogleCloudChannelV1RepricingAdjustment(
                percentage_adjustment=shared.GoogleCloudChannelV1PercentageAdjustment(
                    percentage=shared.GoogleTypeDecimal(
                        value="ipsam",
                    ),
                ),
            ),
            channel_partner_granularity={
                "quibusdam": "voluptatem",
                "aut": "est",
                "sit": "ab",
            },
            conditional_overrides=[
                shared.GoogleCloudChannelV1ConditionalOverride(
                    adjustment=shared.GoogleCloudChannelV1RepricingAdjustment(
                        percentage_adjustment=shared.GoogleCloudChannelV1PercentageAdjustment(
                            percentage=shared.GoogleTypeDecimal(
                                value="quam",
                            ),
                        ),
                    ),
                    rebilling_basis="COST_AT_LIST",
                    repricing_condition=shared.GoogleCloudChannelV1RepricingCondition(
                        sku_group_condition=shared.GoogleCloudChannelV1SkuGroupCondition(
                            sku_group="eos",
                        ),
                    ),
                ),
                shared.GoogleCloudChannelV1ConditionalOverride(
                    adjustment=shared.GoogleCloudChannelV1RepricingAdjustment(
                        percentage_adjustment=shared.GoogleCloudChannelV1PercentageAdjustment(
                            percentage=shared.GoogleTypeDecimal(
                                value="quo",
                            ),
                        ),
                    ),
                    rebilling_basis="DIRECT_CUSTOMER_COST",
                    repricing_condition=shared.GoogleCloudChannelV1RepricingCondition(
                        sku_group_condition=shared.GoogleCloudChannelV1SkuGroupCondition(
                            sku_group="quo",
                        ),
                    ),
                ),
            ],
            effective_invoice_month=shared.GoogleTypeDate(
                day=8375693332495693837,
                month=7568906015139679031,
                year=7567576333916807437,
            ),
            entitlement_granularity=shared.GoogleCloudChannelV1RepricingConfigEntitlementGranularity(
                entitlement="nemo",
            ),
            rebilling_basis="COST_AT_LIST",
        ),
    ),
)
    
res = s.accounts.cloudchannel_accounts_channel_partner_links_channel_partner_repricing_configs_create(req)

if res.google_cloud_channel_v1_channel_partner_repricing_config is not None:
    # handle response
```
<!-- End SDK Example Usage -->