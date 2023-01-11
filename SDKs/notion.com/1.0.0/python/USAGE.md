<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.AppendBlockChildrenRequest(
    path_params=operations.AppendBlockChildrenPathParams(
        id="voluptatem",
    ),
    request=operations.AppendBlockChildrenRequestBody(
        children=[
            operations.AppendBlockChildrenRequestBodyChildren(
                heading_2=operations.AppendBlockChildrenRequestBodyChildrenHeading2(
                    text=[
                        operations.AppendBlockChildrenRequestBodyChildrenHeading2Text(
                            text=operations.AppendBlockChildrenRequestBodyChildrenHeading2TextText(
                                content="quae",
                            ),
                            type="nesciunt",
                        ),
                        operations.AppendBlockChildrenRequestBodyChildrenHeading2Text(
                            text=operations.AppendBlockChildrenRequestBodyChildrenHeading2TextText(
                                content="ad",
                            ),
                            type="incidunt",
                        ),
                    ],
                ),
                object="dicta",
                type="veritatis",
            ),
            operations.AppendBlockChildrenRequestBodyChildren(
                heading_2=operations.AppendBlockChildrenRequestBodyChildrenHeading2(
                    text=[
                        operations.AppendBlockChildrenRequestBodyChildrenHeading2Text(
                            text=operations.AppendBlockChildrenRequestBodyChildrenHeading2TextText(
                                content="recusandae",
                            ),
                            type="qui",
                        ),
                        operations.AppendBlockChildrenRequestBodyChildrenHeading2Text(
                            text=operations.AppendBlockChildrenRequestBodyChildrenHeading2TextText(
                                content="consequatur",
                            ),
                            type="ut",
                        ),
                    ],
                ),
                object="sint",
                type="sit",
            ),
        ],
    ),
)
    
res = s.blocks.append_block_children(req)

if res.append_block_children_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->