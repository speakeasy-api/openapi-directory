package shared

type ActiveWidgetList struct {
	Meta    *PagingMeta    `json:"meta,omitempty"`
	Widgets []ActiveWidget `json:"widgets,omitempty"`
}
