# Templates

### Available Operations

* [CopyTemplate](#copytemplate) - Copy template
* [CreateTemplate](#createtemplate) - Create template
* [DeleteTemplate](#deletetemplate) - Delete template
* [GetEditorURL](#geteditorurl) - Open editor
* [GetTemplate](#gettemplate) - Get template
* [GetTemplates](#gettemplates) - Get templates
* [UpdateTemplate](#updatetemplate) - Update template

## CopyTemplate

Creates a copy of a template to the workspace specified in authentication parameters.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            JSONWebTokenAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Templates.CopyTemplate(ctx, operations.CopyTemplateRequest{
        Name: sdk.String("Kelvin Sporer"),
        TemplateID: 19375,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CopyTemplate200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateTemplate

Creates a new template. If template configuration is not specified in the request body then an empty template is created. Template is placed to the workspace specified in authentication params. Template configuration must be sent in the request body.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            JSONWebTokenAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Templates.CreateTemplate(ctx, shared.TemplateDefinitionNew{
        IsDraft: sdk.Bool(true),
        Layout: &shared.TemplateDefinitionNewLayout{
            EmptyLabels: sdk.Int64(544883),
            Format: shared.TemplateDefinitionNewLayoutFormatEnumA4.ToPointer(),
            Height: sdk.Float64(29.7),
            Margins: &shared.TemplateDefinitionNewLayoutMargins{
                Bottom: sdk.Float64(0.5),
                Left: sdk.Float64(0.5),
                Right: sdk.Float64(0.5),
                Top: sdk.Float64(0.5),
            },
            Orientation: shared.TemplateDefinitionNewLayoutOrientationEnumPortrait.ToPointer(),
            RepeatLayout: &shared.TemplateDefinitionNewLayoutRepeatLayout{
                Format: shared.TemplateDefinitionNewLayoutRepeatLayoutFormatEnumA4.ToPointer(),
                Height: sdk.Float64(29.7),
                Width: sdk.Float64(21),
            },
            Rotaion: shared.TemplateDefinitionNewLayoutRotaionEnumTwoHundredAndSeventy.ToPointer(),
            Unit: shared.TemplateDefinitionNewLayoutUnitEnumCm.ToPointer(),
            Width: sdk.Float64(21),
        },
        Name: "Invoice template",
        Pages: []shared.TemplateDefinitionNewPages{
            shared.TemplateDefinitionNewPages{
                Components: []shared.Component{
                    shared.Component{
                        Cls: shared.ComponentClsEnumLabelComponent.ToPointer(),
                        DataIndex: sdk.String("line_items"),
                        Height: sdk.Float64(1),
                        ID: sdk.String("component-12313"),
                        Left: sdk.Float64(2.5),
                        Top: sdk.Float64(4.2),
                        Value: sdk.String("${price}"),
                        Width: sdk.Float64(3.5),
                        Zindex: sdk.Int64(102),
                    },
                    shared.Component{
                        Cls: shared.ComponentClsEnumLabelComponent.ToPointer(),
                        DataIndex: sdk.String("line_items"),
                        Height: sdk.Float64(1),
                        ID: sdk.String("component-12313"),
                        Left: sdk.Float64(2.5),
                        Top: sdk.Float64(4.2),
                        Value: sdk.String("${price}"),
                        Width: sdk.Float64(3.5),
                        Zindex: sdk.Int64(102),
                    },
                    shared.Component{
                        Cls: shared.ComponentClsEnumLabelComponent.ToPointer(),
                        DataIndex: sdk.String("line_items"),
                        Height: sdk.Float64(1),
                        ID: sdk.String("component-12313"),
                        Left: sdk.Float64(2.5),
                        Top: sdk.Float64(4.2),
                        Value: sdk.String("${price}"),
                        Width: sdk.Float64(3.5),
                        Zindex: sdk.Int64(102),
                    },
                },
                Height: sdk.Float64(29.7),
                Margins: &shared.TemplateDefinitionNewPagesMargins{
                    Bottom: sdk.Float64(0.5),
                    Right: sdk.Float64(0.5),
                },
                Width: sdk.Float64(21),
            },
            shared.TemplateDefinitionNewPages{
                Components: []shared.Component{
                    shared.Component{
                        Cls: shared.ComponentClsEnumLabelComponent.ToPointer(),
                        DataIndex: sdk.String("line_items"),
                        Height: sdk.Float64(1),
                        ID: sdk.String("component-12313"),
                        Left: sdk.Float64(2.5),
                        Top: sdk.Float64(4.2),
                        Value: sdk.String("${price}"),
                        Width: sdk.Float64(3.5),
                        Zindex: sdk.Int64(102),
                    },
                    shared.Component{
                        Cls: shared.ComponentClsEnumLabelComponent.ToPointer(),
                        DataIndex: sdk.String("line_items"),
                        Height: sdk.Float64(1),
                        ID: sdk.String("component-12313"),
                        Left: sdk.Float64(2.5),
                        Top: sdk.Float64(4.2),
                        Value: sdk.String("${price}"),
                        Width: sdk.Float64(3.5),
                        Zindex: sdk.Int64(102),
                    },
                    shared.Component{
                        Cls: shared.ComponentClsEnumLabelComponent.ToPointer(),
                        DataIndex: sdk.String("line_items"),
                        Height: sdk.Float64(1),
                        ID: sdk.String("component-12313"),
                        Left: sdk.Float64(2.5),
                        Top: sdk.Float64(4.2),
                        Value: sdk.String("${price}"),
                        Width: sdk.Float64(3.5),
                        Zindex: sdk.Int64(102),
                    },
                },
                Height: sdk.Float64(29.7),
                Margins: &shared.TemplateDefinitionNewPagesMargins{
                    Bottom: sdk.Float64(0.5),
                    Right: sdk.Float64(0.5),
                },
                Width: sdk.Float64(21),
            },
        },
        Tags: []string{
            "iure",
            "magnam",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateTemplate200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DeleteTemplate

Deletes the template from workspace

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            JSONWebTokenAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Templates.DeleteTemplate(ctx, operations.DeleteTemplateRequest{
        TemplateID: 19375,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteTemplate200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetEditorURL

Returns an unique URL which you can use to redirect your user to the editor from your application or use the generated URL as iframe source to show the editor within your application.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            JSONWebTokenAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Templates.GetEditorURL(ctx, operations.GetEditorURLRequest{
        RequestBody: map[string]interface{}{
            "ipsa": "delectus",
            "tempora": "suscipit",
            "molestiae": "minus",
            "placeat": "voluptatum",
        },
        Language: operations.GetEditorURLLanguageEnumCs.ToPointer(),
        TemplateID: 19375,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetEditorURL200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetTemplate

Returns template configuration

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            JSONWebTokenAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Templates.GetTemplate(ctx, operations.GetTemplateRequest{
        TemplateID: 19375,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTemplate200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetTemplates

Returns a list of templates available for the authenticated workspace

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            JSONWebTokenAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Templates.GetTemplates(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTemplates200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateTemplate

Updates template configuration. The template configuration for pages and layout must be complete as the entire configuration is replaced and not merged.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            JSONWebTokenAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Templates.UpdateTemplate(ctx, operations.UpdateTemplateRequest{
        TemplateDefinitionNew: shared.TemplateDefinitionNew{
            IsDraft: sdk.Bool(true),
            Layout: &shared.TemplateDefinitionNewLayout{
                EmptyLabels: sdk.Int64(568045),
                Format: shared.TemplateDefinitionNewLayoutFormatEnumA4.ToPointer(),
                Height: sdk.Float64(29.7),
                Margins: &shared.TemplateDefinitionNewLayoutMargins{
                    Bottom: sdk.Float64(0.5),
                    Left: sdk.Float64(0.5),
                    Right: sdk.Float64(0.5),
                    Top: sdk.Float64(0.5),
                },
                Orientation: shared.TemplateDefinitionNewLayoutOrientationEnumPortrait.ToPointer(),
                RepeatLayout: &shared.TemplateDefinitionNewLayoutRepeatLayout{
                    Format: shared.TemplateDefinitionNewLayoutRepeatLayoutFormatEnumA4.ToPointer(),
                    Height: sdk.Float64(29.7),
                    Width: sdk.Float64(21),
                },
                Rotaion: shared.TemplateDefinitionNewLayoutRotaionEnumNinety.ToPointer(),
                Unit: shared.TemplateDefinitionNewLayoutUnitEnumCm.ToPointer(),
                Width: sdk.Float64(21),
            },
            Name: "Invoice template",
            Pages: []shared.TemplateDefinitionNewPages{
                shared.TemplateDefinitionNewPages{
                    Components: []shared.Component{
                        shared.Component{
                            Cls: shared.ComponentClsEnumLabelComponent.ToPointer(),
                            DataIndex: sdk.String("line_items"),
                            Height: sdk.Float64(1),
                            ID: sdk.String("component-12313"),
                            Left: sdk.Float64(2.5),
                            Top: sdk.Float64(4.2),
                            Value: sdk.String("${price}"),
                            Width: sdk.Float64(3.5),
                            Zindex: sdk.Int64(102),
                        },
                        shared.Component{
                            Cls: shared.ComponentClsEnumLabelComponent.ToPointer(),
                            DataIndex: sdk.String("line_items"),
                            Height: sdk.Float64(1),
                            ID: sdk.String("component-12313"),
                            Left: sdk.Float64(2.5),
                            Top: sdk.Float64(4.2),
                            Value: sdk.String("${price}"),
                            Width: sdk.Float64(3.5),
                            Zindex: sdk.Int64(102),
                        },
                        shared.Component{
                            Cls: shared.ComponentClsEnumLabelComponent.ToPointer(),
                            DataIndex: sdk.String("line_items"),
                            Height: sdk.Float64(1),
                            ID: sdk.String("component-12313"),
                            Left: sdk.Float64(2.5),
                            Top: sdk.Float64(4.2),
                            Value: sdk.String("${price}"),
                            Width: sdk.Float64(3.5),
                            Zindex: sdk.Int64(102),
                        },
                        shared.Component{
                            Cls: shared.ComponentClsEnumLabelComponent.ToPointer(),
                            DataIndex: sdk.String("line_items"),
                            Height: sdk.Float64(1),
                            ID: sdk.String("component-12313"),
                            Left: sdk.Float64(2.5),
                            Top: sdk.Float64(4.2),
                            Value: sdk.String("${price}"),
                            Width: sdk.Float64(3.5),
                            Zindex: sdk.Int64(102),
                        },
                    },
                    Height: sdk.Float64(29.7),
                    Margins: &shared.TemplateDefinitionNewPagesMargins{
                        Bottom: sdk.Float64(0.5),
                        Right: sdk.Float64(0.5),
                    },
                    Width: sdk.Float64(21),
                },
                shared.TemplateDefinitionNewPages{
                    Components: []shared.Component{
                        shared.Component{
                            Cls: shared.ComponentClsEnumLabelComponent.ToPointer(),
                            DataIndex: sdk.String("line_items"),
                            Height: sdk.Float64(1),
                            ID: sdk.String("component-12313"),
                            Left: sdk.Float64(2.5),
                            Top: sdk.Float64(4.2),
                            Value: sdk.String("${price}"),
                            Width: sdk.Float64(3.5),
                            Zindex: sdk.Int64(102),
                        },
                    },
                    Height: sdk.Float64(29.7),
                    Margins: &shared.TemplateDefinitionNewPagesMargins{
                        Bottom: sdk.Float64(0.5),
                        Right: sdk.Float64(0.5),
                    },
                    Width: sdk.Float64(21),
                },
                shared.TemplateDefinitionNewPages{
                    Components: []shared.Component{
                        shared.Component{
                            Cls: shared.ComponentClsEnumLabelComponent.ToPointer(),
                            DataIndex: sdk.String("line_items"),
                            Height: sdk.Float64(1),
                            ID: sdk.String("component-12313"),
                            Left: sdk.Float64(2.5),
                            Top: sdk.Float64(4.2),
                            Value: sdk.String("${price}"),
                            Width: sdk.Float64(3.5),
                            Zindex: sdk.Int64(102),
                        },
                        shared.Component{
                            Cls: shared.ComponentClsEnumLabelComponent.ToPointer(),
                            DataIndex: sdk.String("line_items"),
                            Height: sdk.Float64(1),
                            ID: sdk.String("component-12313"),
                            Left: sdk.Float64(2.5),
                            Top: sdk.Float64(4.2),
                            Value: sdk.String("${price}"),
                            Width: sdk.Float64(3.5),
                            Zindex: sdk.Int64(102),
                        },
                    },
                    Height: sdk.Float64(29.7),
                    Margins: &shared.TemplateDefinitionNewPagesMargins{
                        Bottom: sdk.Float64(0.5),
                        Right: sdk.Float64(0.5),
                    },
                    Width: sdk.Float64(21),
                },
                shared.TemplateDefinitionNewPages{
                    Components: []shared.Component{
                        shared.Component{
                            Cls: shared.ComponentClsEnumLabelComponent.ToPointer(),
                            DataIndex: sdk.String("line_items"),
                            Height: sdk.Float64(1),
                            ID: sdk.String("component-12313"),
                            Left: sdk.Float64(2.5),
                            Top: sdk.Float64(4.2),
                            Value: sdk.String("${price}"),
                            Width: sdk.Float64(3.5),
                            Zindex: sdk.Int64(102),
                        },
                    },
                    Height: sdk.Float64(29.7),
                    Margins: &shared.TemplateDefinitionNewPagesMargins{
                        Bottom: sdk.Float64(0.5),
                        Right: sdk.Float64(0.5),
                    },
                    Width: sdk.Float64(21),
                },
            },
            Tags: []string{
                "perferendis",
                "ipsam",
                "repellendus",
            },
        },
        TemplateID: 19375,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateTemplate200ApplicationJSONObject != nil {
        // handle response
    }
}
```
